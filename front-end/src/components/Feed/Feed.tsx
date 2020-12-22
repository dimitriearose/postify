import React from 'react'
import {Helmet} from 'react-helmet'
import Post from './Post'
import './Feed.scss'

function Feed() {
    const posts = [
        { name: 'Dimitri',
        details: 'Badman nuh smile',
        createdAt: new Date()
    },

    { name: 'MIkG',
    details: 'I crash cars',
    createdAt: new Date()
},

{ name: 'William',
details: 'You have a fat ass but can you reverse a linked list?',
createdAt: new Date()
},

{ name: 'Rashane',
details: 'My heart belongs to grace ann!',
createdAt: new Date()
},
{ name: 'Dimitri',
details: 'Badman nuh smile',
createdAt: new Date()
},

{ name: 'MIkG',
details: 'I crash cars',
createdAt: new Date()
},

{ name: 'William',
details: 'You have a fat ass but can you reverse a linked list?',
createdAt: new Date()
},

{ name: 'Rashane',
details: 'My heart belongs to grace ann!',
createdAt: new Date()
},
{ name: 'Dimitri',
details: 'Badman nuh smile',
createdAt: new Date()
},

{ name: 'MIkG',
details: 'I crash cars',
createdAt: new Date()
},

{ name: 'William',
details: 'You have a fat ass but can you reverse a linked list?',
createdAt: new Date()
},

{ name: 'Rashane',
details: 'My heart belongs to grace ann!',
createdAt: new Date()
}
    ]
    return (
        <div className='feed'>
            <div className="feed__posts">
                {posts.map((post,index) => {
                    return <Post createdAt={post.createdAt} name={post.name} details={post.details} key={index}/>
                })}
            </div>
        </div>
    )
}

export default Feed
