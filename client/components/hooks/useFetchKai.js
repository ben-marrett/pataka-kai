import { useState, useEffect } from 'react'
import { getKaiList } from '../../apiClient'

function useFetchKai() {
  const [kai, setKai] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function fetchKai() {
    setLoading(true)
    setError('')
    getKaiList()
      .then((kai) => {
        console.log('fetchKai running:', kai)
        setKai(kai)
        return null
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err.message)
      })
  }

  useEffect(() => {
    fetchKai()
  }, [])

  return { kai, loading, error, fetchKai }
}

export default useFetchKai
