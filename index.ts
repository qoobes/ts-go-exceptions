export const handleException = <ResultType = unknown, ErrorType = unknown>(
  promise: Promise<ResultType>
): Promise<[ResultType | null, ErrorType | null]> =>
  promise
    .then(data => [data, null] as [ResultType | null, ErrorType | null])
    .catch(error => [null, error] as [ResultType | null, ErrorType | null])
