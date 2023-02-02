

function dummyCard(props) {
    return (
        <>
           <div class="background"></div>
            <div id="curve" class="favcard">
                <div class="footer">
                    <div class="connections">
                        <div class="connection facebook"><div class="icon"></div></div>
                        <div class="connection twitter"><div class="icon"></div></div>
                        <div class="connection behance"><div class="icon"></div></div>
                    </div>
                    <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <div class="info">
                        <div class="name">Filan Fisteku</div>
                        <div class="job">Architect Manager</div>
                    </div>
                </div>
                <div class="card-blur"></div>
            </div>

        </>
    )
}
    

default export dummyCard;