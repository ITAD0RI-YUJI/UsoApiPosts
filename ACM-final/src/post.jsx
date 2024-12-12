import './styles/main/post_container/post.css'

function Post(){
    return(
        <>
            <section className="post_container">
                <article className="post">
                    <header className="post_header">
                        <div className="post_info-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBLnICrXyLruGv2jPoICK9TF0UDLkYdlNpw&s" alt="Profile picture" className="profile-picture"/>

                            <div className="post_name-container">
                                <div className="post_post-info">
                                    <p className="post_letter post_p post_user-name">Turbo Abuela</p>
                                    <p className="post_arroba">@TurboAbuela</p>
                                    <span className="post_date"> • 25 nov</span>
                                </div>
                                <p className="post_letter post_p post_user-id">123</p>
                            </div>
                        </div>

                        <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em" height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                    </header>

                    <div className="post_body">
                        <h2 className="post_letter post_title">Post´s title</h2>

                        <p className="post_letter post_body--p">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum minima est recusandae laborum? Iure, quisquam suscipit alias exercitationem veniam quis recusandae, obcaecati, harum quas nam mollitia ullam optio dolorem.
                        </p>
                    </div>

                    <div className="post_tags">
                        <span className="tag post_letter">Dandadan</span>
                        <span className="tag post_letter">TurboAbuela</span>
                    </div>

                    <div className="post_general-info">
                        <button className="btn post_btn btn-heart">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em"  height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon user-opinion post-icon icon-like icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                            <span className="post_span">256</span>
                        </button>
                        <button className="btn post_btn">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em"  height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon user-opinion icon-dislike post-icon icon-tabler icons-tabler-outline icon-tabler-heart-broken"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-2 4l4 3l-2 4v3" /></svg>
                            <span className="post_span">12</span>
                        </button>
                        <button className="btn post_btn">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em"  height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-view post-icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
                            <span className="post_span">320</span>
                        </button>
                        <button className="btn post_btn">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em"  height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-share post-icon icon-tabler icons-tabler-outline icon-tabler-share"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg>
                            <span className="post_span">share</span>
                        </button>
                        <button className="btn post_btn">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="1.5em"  height="1.5em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-share post-icon icon-tabler icons-tabler-outline icon-tabler-bookmark-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
                            <span className="post_span">save</span>
                        </button>
                    </div>
                </article>
               
            </section>
        </>
    )
}

export default Post