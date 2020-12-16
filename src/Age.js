export default function Age(props) {

    let age = 2020 - props.birthYear;

    return (
        <span>
            I am {age} years old.
        </span>
    )
}