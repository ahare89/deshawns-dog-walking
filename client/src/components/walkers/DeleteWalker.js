export const DeleteWalker = ({walkerId, fetchWalkers, walker}) => {
    
    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`/api/walkers/${walkerId}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => {
            if (res.status === 204) {
                fetchWalkers();
            }
        })

        }

    
    return <button onClick={handleDelete}>Delete</button>
}