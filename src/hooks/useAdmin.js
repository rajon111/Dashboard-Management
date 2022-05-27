import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000api/admin?email=${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${ localStorage.getItem('accessToken') }`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.role === "admin") {
                        setAdmin(true);
                    }
                    else {
                        setAdmin(false);
                    }
                    // setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;