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

const fetchData = async () => {
    try {
        const responseData = await fetch(
            "https://api.github.com/users/parthpandya-qt"
        );

        if (!responseData.ok) {
            throw new Error(`HTTP error! status: ${responseData.status}`);
        }

        const data: GitHubUser = await responseData.json();

        console.log("User Data:", data);

    } catch (err: any) {
        console.error("An unknown error occurred:", err);
    }
};

fetchData();
