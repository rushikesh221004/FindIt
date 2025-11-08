import { useLocation } from "react-router-dom"

export default function Edit() {
    const location = useLocation();
    const userData = location.state?.userData;

    if(!userData) return <h2>User data not found</h2>

    console.log(userData);

    return (
        <div>
            This is an edit page
        </div>
    )
}