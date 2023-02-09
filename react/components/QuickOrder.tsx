import React ,{useState, useEffect}from "react";
import {useLazyQuery, useMutation } from "react-apollo";
import UPDATE_CART from "../graphql/updateCart.graphql"
import GET_PRODUCT from "../graphql/getProductBySku.graphql"
import {useCssHandles} from "vtex.css-handles";
import "../styles.css"

const QuickOrder=()=>{
    const CSS_HANDLES=["container","title","form","label","input","add_cart","container_input"]
    const handles=useCssHandles(CSS_HANDLES)
    const [inputText, setInputText]=useState("");
    const [search,setSearch]=useState("")
    const [getProductData, {data :product}]=useLazyQuery(GET_PRODUCT)
    const [addToCart]=useMutation(UPDATE_CART)

    const handleChange=(e:any)=>{
        setInputText(e.target.value)
        console.log("Input changed",inputText);
    } 
    useEffect(()=>{
        console.log("El resultado de mi producto es ", product, search)
        if(product ){
            let skuId=parseInt(inputText)
            console.log("Mis datos necesarios ",skuId,product)
            addToCart(
                {
                    variables:{
                        salesChannel:"1",
                        items:[{
                            id:skuId,
                            quantity:1,
                            seller:"1"
                        }]
                    }
                }
            ).then(()=>{
                window.location.href="/checkout"
            })
        }
    },[product,search])

    const addProductToCart=()=>{
        getProductData({
            variables:{
                sku:inputText
            }
        })
    }
    const searchproduct=(e:any)=>{
        e.preventDefault();
        if(!inputText){
            alert("Oiga, ingresa algo")
        }else{
            console.log("Al final estamos buscando", inputText)
            setSearch(inputText)
            addProductToCart()
            
        }
    }
    return <div className={handles.container}>
        <h2 className={handles.title}>Compra rapida de vtex U</h2>
        <form className={handles.form} onSubmit={searchproduct}>
            <div className={handles.container_input}>
                <label className={handles.label} htmlFor="sku">Ingresa el Número de Sku</label>
                <input className={handles.input}id="sku" type="text" onChange={handleChange} />
            </div>
            <input className={handles.add_cart}type="submit" value="Añadir Al Carrito" />
        </form>
    </div>
}
export default QuickOrder