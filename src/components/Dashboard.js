import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Alert, Button, Card} from "react-bootstrap";
import {useAuth} from "../context/AuthContext";

export default function Dashboard() {

    const [error, setError] = useState("");
    const {currentUser, logout, userData} = useAuth();
    const history = useHistory();

    useEffect(() => {

    },[])

    async function handleLogout() {
        setError("");
        
        try{
            await logout();
            history.push("/login")
        }catch (e) {
            setError("Failed to logout");
        }
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h5>Welcome, <span style={{"textTransform":"capitalize"}}>{currentUser.displayName}</span></h5>
                    <strong>Email: {currentUser.email}</strong>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
            <div>
                {JSON.stringify(userData)}
            </div>
        </>
    )
}