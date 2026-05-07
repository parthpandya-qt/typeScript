import axios, { type AxiosResponse } from "axios";

interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    bio: string | null;
}

// axios.get("https://api.github.com/users/parthpandya-qt")
// .then((res)=>{
//     console.log(res.data);
//     console.log(typeof res.data);
// })
// .catch((err)=>{
//     console.error("Error fetching data:", err);
// });

const fetchData = async ()=>{
    try{
        const response:AxiosResponse<GitHubUser>  = await axios.get("https://api.github.com/users/parthpandya-qt");
        const userData = response.data;
        console.log("User Data:", userData);
    }catch(err)
    {
        if (err instanceof Error) {
            console.error("Error fetching data:", err.message);
        } else {
            console.error("An unknown error occurred.");
        }       
    }
}
fetchData();