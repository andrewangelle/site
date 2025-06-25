console.log(
  Array(10).fill(null).map((_, idx) => idx * 100).filter(Boolean)
)