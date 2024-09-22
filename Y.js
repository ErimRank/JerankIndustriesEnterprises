const AUTORUN=()=>{

    HOMEPAGE();

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='Holder' >
        
            <img class='AppLogo' src='./Jerank.jpg'/>

            <h1>JERANK INDUSTRIES ENTERPRISES</h1>

            <div class='Header'>

                <p class='Names' >Products</p>

                <p class='Names' >About Us</p>

                <p class='Names' >Contact US</p>
            
            </div>

            <div class='HomeDiv'>

                <h1>Who We are </h1>

                <p class='Naotes'>
                
                Jerank Industries is a Agro Manufactering Company That Deals in Manufacturing of Food Products from Animals to Human Daily Food Products

                <br><br>

                Book Today To be Delivered any of our food products as Displayed Below.
                
                </p>

                <div class='ProductsDiv'>

                    <img class='ProductsImage' src='./Jerank.jpg'/>

                    <img class='ProductsImage' src='./Jerank.jpg'/>

                    <img class='ProductsImage' src='./Jerank.jpg'/>

                    <img class='ProductsImage' src='./Jerank.jpg'/>
                
                </div>

                <button class='forestgreen'>See All Products</button>

                <h1>Jerank Missions</h1>

                <p class='Naotes'>

                    Our Mission is to provide both Humans and Animals the most high quality provides using the latest cutting edge tech and still be affordable to the consumer but still keeping the health of our consumers a concern.
                  
                </p>
            
            </div>

            <h1>Reach Us Today Via</h1>

            <div class='Header'>

                <p class='Names' id='EmailUs' >Email</p>

                <p class='Names' id='CallUs' >Call</p>

                <p class='Names' id='InstagramUs'  >Instagram</p>
            
            </div>

        </div>
    
    `);

    CLICKED('#EmailUs',()=>{
        
        GMAIL('erimrank167@gmail.com');

    });

    CLICKED('#CallUs',()=>{
        
        CALL('256782625561');

    });

    CLICKED('#InstagramUs',()=>{
        
        INSTAGRAM('test');

    });

}