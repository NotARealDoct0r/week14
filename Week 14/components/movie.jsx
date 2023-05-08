import StarRating from "../StarRating";
import '../App.css';

function Movie(){
    return (
        // a styled link for the movie image
        <div style={styles.container} className="movie">
            <a style={{ fontSize: 35 }} href="https://m.media-amazon.com/images/I/51By+JanDSL._AC_UF894,1000_QL80_.jpg">UP movie</a><br/>
            {/* for the user to be able to rate the movie */}
            <StarRating />
                {/* form for user to leave a review */}
                <form>
                    <textarea 
                        placeholder='Leave a Review'
                        style={styles.textarea}
                    />
                </form>
                <button styles={styles.button}>Submit</button>
            <a style={{ fontSize: 35 }} href="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/26E7C634EB29C137475AE05AC983080BAE7E2E3741C49987EEA2539A40A9262C/scale?width=1200&aspectRatio=1.78&format=jpeg">Toy Story</a><br/>
            <StarRating />
                <form>    
                    <textarea 
                        placeholder='Leave a Review'
                        style={styles.textarea}
                    />
                </form>
                <button styles={styles.button}>Submit</button><br/>
            <a style={{ fontSize: 35 }} href="https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810">Finding Nemo</a>
            <StarRating />
                <form>
                    <textarea 
                        placeholder='Leave a Review'
                        style={styles.textarea}
                    />
                </form>
                <button styles={styles.button}>Submit</button>
        </div>
        );
}

// to be able to use the function outside of the file
export default Movie;

// css to style/customize the elements/components
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        margin: "20px 0",
        minHeight: 100,
        padding: 10
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10
    }
}

