import { useState } from 'react'

const HomeCounter = () => {
	const [count, setCount] = useState(0)
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>count is {count}</button>
		</div>
	)
}

export default HomeCounter
