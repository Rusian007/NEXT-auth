
const Error = ({errmsg})=>{
	return(
		<>
		<style jsx>{`
		  p {
		    font-size: 13px;
        color: red;
        font-weight: bolder;
		  }
		`}
		</style>

			<p> {errmsg} </p>
		</>
		)

};
module.exports = Error