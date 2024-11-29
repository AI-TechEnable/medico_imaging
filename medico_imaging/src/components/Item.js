import { Paper, Button } from '@mui/material'


function Item({item})
{
    return (
        <Paper>
            {/* <img src={item.image_url} alt={item.name} style={{width:"100%",height:"60vh"}}></img> */}
            <div className='description' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <img src={item.image_url} alt={item.name} style={{width:"100%",height:"60vh"}}></img>  
                <p style={{fontVariant:"all-petite-caps"}}>{item.description}</p>           
                <h2 style={{fontVariant:"all-petite-caps"}}>{item.name}</h2>
                
                <Button className="CheckButton" variant='contained'>
                Check it out!
                </Button>
            </div> 
        </Paper>
    )
}

export default Item