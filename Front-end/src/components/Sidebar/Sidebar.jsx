import { useEffect, useState } from "react";
import Menuitem from "../../components/Menuitem/Menuitem";

export default function Sidebar(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const userData = props.userData;
    //console.log(userData);
    const roleName = userData[0].role.descripcion;
    const roleId =  userData[0].role.id;
    
    useEffect(() => {    
    
        async function fetchData() {
          try {
            const response = await fetch('http://127.0.0.1:8000/api/enlace/rol/' + roleId);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            setData(data);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
    
        fetchData();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }

        //console.log(data[2].descripcion);
        //console.log(data[2].pagina.url);

        const arrayOfObjects = Object.keys(data).map(key => data[key]);

    return (
        <div className="bg-black h-screen w-[250px]">
            <ul className="items-center h-20 bg-black">
                <Menuitem tipo="Role" url="#" menuLabel={"Role: " + roleName}  />
                {arrayOfObjects.map((item, index) => (
                    <Menuitem key={index} tipo="" url={item.pagina.url} menuLabel={item.descripcion}  />
                ))}
            </ul> 
        </div>       
    );
}