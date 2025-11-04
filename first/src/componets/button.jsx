


function Button({buttonName}){

    return (
        <>



            <button
                className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-7 center  rounded shadow-md transition duration-300 active:bg-green-600">
                {buttonName}

            </button>

        </>
    )
}


export default Button;