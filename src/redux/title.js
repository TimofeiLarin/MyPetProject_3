function Title(props) {
console.log('prpos title', props)
  const handleChange = (e) => {
    console.log('handel text', e.target.value)
  }
  return (
    <div className='card-title'>
      <div className='card-title-top'>
        <input type='text' onChange={handleChange} />
      </div>
    </div>
  );
}
