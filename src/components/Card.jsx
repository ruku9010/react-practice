export default function Card({children, firstName, lastName, age}){
    return (
        <div>
            <h2>Card Component</h2>
            <p>My  name is {firstName} {lastName}</p>
            <p>I'm {age} years old</p>
            {children}
        </div>
    )
}