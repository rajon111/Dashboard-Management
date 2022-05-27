import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        console.log(email)
        if (email) {
            fetch(`https://ancient-bastion-87117.herokuapp.com/api/admin?email=${email}`, {
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