import {getApiContent} from './apiCall.js';
import {appendPost} from './append.js';
import {tags} from './tags.js';
import {users , getUserName} from './user-name.js';
import {fecha , mesArray} from './fecha.js';
 
export const apiUrl = 'https://dummyjson.com/posts';

let callApi = async url =>{
    let getPost = await getApiContent(url);

    return getPost;
}

export async function useInfo(url){
    let infoApi = await callApi(url);

    let post = infoApi.posts;

    post.forEach(postSelected => {
        // console.log(tags(postSelected.tags));
        console.log(getUserName(users));
        const usuario = getUserName(users);
        
        appendPost(usuario.nombre , usuario.info.img , usuario.info.arroba , postSelected.id , postSelected.title , postSelected.body , postSelected.tags, 
                    postSelected.reactions.likes , postSelected.reactions.dislikes , postSelected.views , fecha(mesArray));
    });
}
// useInfo(apiUrl);