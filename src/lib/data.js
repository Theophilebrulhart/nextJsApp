import {Post} from './models.js';
import {User} from './models.js';
import { connectToDb } from './utils.js';

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    }  
    catch (error) {
        console.log('Error getting posts: ', error);
        throw new Error('Error getting posts');
    }
};

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug: slug});
        return post;
    }  
    catch (error) {
        console.log('Error getting posts: ', error);
        throw new Error('Error getting post');
    }
};

export const getUses = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users ;
    }  
    catch (error) {
        console.log('Error getting users: ', error);
        throw new Error('Error getting users');
    }
};

export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById(id);
        return user ;
    }  
    catch (error) {
        console.log('Error getting users: ', error);
        throw new Error('Error getting users');
    }
};