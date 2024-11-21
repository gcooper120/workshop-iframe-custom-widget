/**
Copyright 2024 Palantir Technologies, Inc.

Licensed under Palantir's License;
you may not use this file except in compliance with the License.
You may obtain a copy of the License from the root of this repository at LICENSE.md

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
/**
 * Final composite 'async' loading types.
 *
 * @type V The value type
 * @type E The error type, defaults to `unknown`
 */
export type IAsyncValue<V, E = unknown> = IAsyncValue_Loading | IAsyncValue_Loaded<V> | IAsyncValue_Reloading<V> | IAsyncValue_Failed<E>;
/**
 * State that represents that loading is in progress.
 */
interface IAsyncValue_Loading {
    status: "LOADING";
}
/**
 * State that represents that loading has completed successfully.
 *
 * @type V: The value type
 */
interface IAsyncValue_Loaded<V> {
    status: "LOADED";
    value: V;
}
/**
 * State that represents that reloading is in progress.
 *
 * @type V: The value type
 */
interface IAsyncValue_Reloading<V> {
    progress?: number;
    status: "RELOADING";
    value: V;
}
/**
 * State that represents that loading failed.
 *
 * @type E: The error type
 */
interface IAsyncValue_Failed<E> {
    status: "FAILED";
    error: E;
}
/**
 * Helper function for creating "loading" async loading state.
 */
export declare function asyncValueLoading(): IAsyncValue_Loading;
/**
 * Helper function for creating the "loaded" async loading state.
 *
 * @param value: The loaded value
 * @type V: The value type
 */
export declare function asyncValueLoaded<V>(value: V): IAsyncValue_Loaded<V>;
/**
 * Helper function for creating the "failed" async loading state.
 *
 * @param error: The error associated with the reason behind the failure
 * @type E: The error type
 */
export declare function asyncValueFailed<E>(error: E): IAsyncValue_Failed<E>;
/**
 * Helper function for creating the "failed" async loading state.
 *
 * @param value: The previously loaded value
 * @param progress: The loading progress percentage
 * @type V: The value type
 */
export declare function asyncValueReloading<V>(value: V, progress?: number): IAsyncValue_Reloading<V>;
/**
 * Type guard for "loading" async loaded state.
 *
 * @param state: The async loaded state to type check
 * @type V: The value type
 * @type E: The error type
 * @returns true only if the asyncloaded state is "loading".
 */
export declare function isAsyncValue_Loading<V, E>(state: IAsyncValue<V, E> | undefined): state is IAsyncValue_Loading;
/**
 * Type guard for "loaded" async loaded state.
 *
 * @param state: The async loaded state to type check
 * @type V: The value type
 * @type E: The error type
 * @returns true only if the asyncloaded state is "loaded".
 */
export declare function isAsyncValue_Loaded<V, E>(state: IAsyncValue<V, E> | undefined): state is IAsyncValue_Loaded<V>;
/**
 * Type guard for "realoding" async loaded state.
 *
 * @param state: The async loaded state to type check
 * @type V: The value type
 * @type E: The error type
 * @returns true only if the asyncloaded state is "reloading".
 */
export declare function isAsyncValue_Reloading<V, E>(state: IAsyncValue<V, E> | undefined): state is IAsyncValue_Reloading<V>;
/**
 * Type guard for "failed loading" async loaded state.
 *
 * @param state: The async loaded state to type check
 * @type V: The value type
 * @type E: The error type
 * @returns true only if the asyncloaded state is "failed loading".
 */
export declare function isAsyncValue_FailedLoading<V, E>(state: IAsyncValue<V, E> | undefined): state is IAsyncValue_Failed<E>;
/**
 * A visitor with all possible async states
 */
export interface IAsyncValueVisitor<V, R, E = unknown> {
    loading: () => R;
    succeeded: (value: V) => R;
    reloading: (previousValue: V) => R;
    failed: (error: E) => R;
}
/**
 * A visitor function to visit an IAsyncValue
 */
export declare function visitLoadingState<V, R, E = unknown>(state: IAsyncValue<V, E>, visitor: IAsyncValueVisitor<V, R, E>): R;
export {};
//# sourceMappingURL=loadingState.d.ts.map