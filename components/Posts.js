import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { db } from '../firebase';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
                setPosts(snapshot.docs);
            }
            ),
        [db]);

    return (
        <div>

        </div>
    )
}

export default Posts