Just some notes
repoAddress:  git@github.com:TrialJ/firstRepo.git
Add default value to component with or || operator. 
exp. 
<h3>User: {state.user[state.count] && "No assigned user. Index: " + state.count}</h3>


Lifecycle events. 
There are 3 different events. 
Initialize - When component is loaded
Updated - when state exp is updated
Removed - when component is removed 

can be triggered through useEffect() (needs to be imported) 2 params((function),("trigger")) if second param is empty it will run when initialized. usually useEffect doesn't return. If it returns a function the function will run when the component is removed 

can also be used via class components. The pros and cons not yet clear ^^ 
class Lifecycle extends React.Component {
  
  componentDidMount() {
    // Initialize
  }

  componentDidUpdate() {
    // Updated
  }

  componentWillUnmount() {
    // Removed
  }
}