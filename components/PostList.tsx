import config from "../config/config.json";
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostList() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setPosts(result.data));
    }, []);

    const listOfPosts = posts.map((post, index) => {
        return <Text style={{ color: 'white', marginBottom: 20, borderWidth: 3, borderColor: 'white', padding: 5, textAlign: "center" }} key={index}>{post.name} : {post.stock} st</Text>
    })

    return (
        <View >
            <Text style={{ color: '#b8b8b8', fontSize: 20, textAlign: "center", margin: 20 }}>Produkter</Text>
            {listOfPosts}
        </View>

    );
}