import { useFetch } from "../customHooks/customhooks"

export function Users() {
    
    const data = useFetch("http://localhost:3004/user")
    
    console.log("At",data);
    return<>
        {
            data.map(e=><div key={e.id}>{e.first_name} {e.last_name}</div>)
        }
    </>
}