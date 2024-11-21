import { IAsyncValue } from "./types/loadingState";
import { IWorkshopContext } from "./types/workshopContext";
import { IConfigDefinition } from "./types";
/**
 * Given the definition of config fields, returns a context object in an async wrapper with properties of the requested fields' IDs,
 * and depending on the field type, each property contains either a value in an async wrapper with setter methods or a method to execute a Workshop event.
 *
 * @param configFields: IConfigDefinition
 * @returns IAsyncValue<IWorkshopContext>, a context object in an async wrapper.
 */
export declare function useWorkshopContext<T extends IConfigDefinition>(configFields: IConfigDefinition): IAsyncValue<IWorkshopContext<T>>;
//# sourceMappingURL=useWorkshopContext.d.ts.map