export const handleException = <ResultType = unknown, ErrorType = unknown>(
  promise: Promise<ResultType>
): Promise<[null, ErrorType] | [ResultType, null]> => promise
    .then(data => [data, null] as [ResultType,  null])
    .catch(error => [null, error] as [null, ErrorType])

