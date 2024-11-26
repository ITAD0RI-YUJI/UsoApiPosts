export function tags(tags){
    let tagContainer = document.querySelector('.post_tags');

    tags.forEach(tagSelected =>{
        tagContainer.innerHTML += `<span class="tag post_letter">${tagSelected}</span>`;
    })

}