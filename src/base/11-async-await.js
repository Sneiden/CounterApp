// const getImagenPromesa = () =>{
//    return new Promise( (resolve, reject) => {
//         resolve('http://mxsrv15:8080/DefaultCollection')
//     })
// };
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'i8zPh4EoL0XfCqxR4zJK5ROGqtWdQ8H3';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json();

        const { url } = data.images.original;
        
        return  url;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );
        
    } catch (error) {

        //manejo del error
        return 'No existe';

    }

};

// getImagen();
