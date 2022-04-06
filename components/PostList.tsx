import config from "../config/config.json";
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
            .then(response => response.json())
            .then(result => setPosts(result.data));
    }, []);

    const listOfPosts = posts.map((post, index) => {
        return <Text style={{ color: 'white', marginBottom: 20 }} key={index}>{post.name} : {post.stock} st</Text>
    })

    return (
        <View >
            <Text style={{ color: 'white' }}>Produkter</Text>
            {listOfPosts}
        </View>

    );
}