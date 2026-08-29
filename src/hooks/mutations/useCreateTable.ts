// import { useMutation, useQueryClient } from "@tanstack/react-query"
// import { createTable } from "@/services/table.service"

// export function useCreateTable() {
//   const queryClient = useQueryClient()

//   return useMutation({
//     mutationFn: createTable,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["tables"],
//       })
//     },
//   })
// }