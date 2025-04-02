
export default function Shop(props){

    return(props.trigger) ? (

        <div id='content' style={{height: '100vh', width: '100%', backgroundColor: '#655D8A',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
      
            {props.children}
      
        </div>
       
    ) : "";
}

