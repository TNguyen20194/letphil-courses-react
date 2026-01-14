import { useState, useEffect } from "react";

// const API = "https://jsonplaceholder.typicode.com/posts?_limit=5"

interface Post {
    id: number,
    title: string,
    body: string
};

type PostType = Post[];

export const Api2 = () => {
    const API = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    const [posts, setPost] = useState<PostType>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(API);
                if(!response.ok) throw new Error("Posts not found");

                const data = await response.json();
                console.log(data)

                if(data.length === 0) return;

                setPost(data);

            } catch(err) {
                setError(true)
                console.log("Error:", err)
            } finally {
                setLoading(false);
            }
    };
     fetchData();
    }, [API]);

    if(loading) {
        return <div className="text-blue-400 text-semibold text-[20px]">Loading data...</div>
    };

    if(error) {
        return <div className="text-red-400 text-semibold text-[20px]">Error getting data</div>
    }

    return (
        <div>
            {posts.map((post) => {
                const title = post.title.charAt(0).toLocaleUpperCase() + post.title.slice(1);
                return (
                    <div key={post.id} className="mb-3 px-3 py-3 bg-gray-700 rounded-[12px]">
                        <div className="mb-2">
                            <h2 className="text-[20px] text-blue-300 text-semibold">{title}</h2>
                        </div>
                        <div>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}