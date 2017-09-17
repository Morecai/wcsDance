var React = require('react');
var Router = require('react-router')

var Login = React.createClass({

	getInitialState: function () {
		return {
			Username: "",
			Password: ""
		}
	},

  render: function(){
	const style = {
		color: '#ccc'
	};

    return(

    	<form method="post" action='/users/login'>
	  		  <div className='form-group'>
				<label>Username 
				</label>
				<input 
					type="text" 
					className="form-control" 
					placeholder="Username" 
					name="username" />
			  </div>
			  <div className='form-group'>
				<label>Password 
				</label>
				<input 
					type="password" 
					className="form-control" 
					placeholder="Password" 
					name="password" />
			  </div>
    	<button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
	</form>
    )
}
});

export default Login;