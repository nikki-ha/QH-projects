import React from "react";
import '../styles/post.css';


const PostScreen = () => {
    return (
        <div className="post-screen">
            {/* <h2 id="post-text">Post</h2> */}
            <head>
                <title>posts</title>
            </head>

            <body>

                <br></br>
                
                <div class="left">
                    <button href="" class="button">Back to Search</button>
                </div>    

                <br></br>

                <div class="center, oneline">
                    <h2>ORG NAME</h2>
                    <button class="button contact">Contact</button>
                </div>

                <div class="center">
                    <p>[location], [affiliation]</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur. Turpis tincidunt id aliquet risus feugiat. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Arcu non sodales neque sodales ut etiam sit amet. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Lacus viverra vitae congue eu consequat. Dolor morbi non arcu risus quis varius quam quisque. Sed ullamcorper morbi tincidunt ornare massa. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Egestas sed tempus urna et pharetra pharetra massa massa.

Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Pellentesque elit eget gravida cum sociis natoque penatibus. Senectus et netus et malesuada fames ac. Amet dictum sit amet justo donec enim diam vulputate ut. Ut placerat orci nulla pellentesque dignissim enim sit. Diam vel quam elementum pulvinar. Sed cras ornare arcu dui vivamus arcu felis. Elementum tempus egestas sed sed risus pretium quam. Laoreet non curabitur gravida arcu ac. Est sit amet facilisis magna etiam. Suspendisse potenti nullam ac tortor vitae purus. Nunc congue nisi vitae suscipit tellus.</p>
                </div>

                <hr></hr>

                <div class="center">
                    <div class="oneline">
                        <h3>QUALIFICATIONS</h3>
                        <br></br>
                    </div>

                    <br></br>
                    
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                        <li>Aliquam tincidunt mauris eu risus.</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                        <li>Nunc dignissim risus id metus.</li>
                    </ul>
                </div>
                
            </body>
        </div>
    )
}

export default PostScreen;