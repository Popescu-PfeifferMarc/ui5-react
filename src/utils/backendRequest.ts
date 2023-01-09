import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = Axios.create({
	baseURL: 'http://localhost:8000/mis/',
});

export const backendRequest = <T>(config: AxiosRequestConfig): Promise<T> => {
	const source = Axios.CancelToken.source();
	const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(({ data }) => data);

	// @ts-expect-error adding custom callback
	promise.cancel = () => {
		source.cancel('Query was cancelled by React Query');
	};

	return promise;
};

export default backendRequest;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ErrorType<Error> extends AxiosError<Error> {}
