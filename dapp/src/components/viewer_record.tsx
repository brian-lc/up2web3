import { useViewerRecord } from '@self.id/framework'

// Load and display the record contents
function ShowViewerName() {
  const record = useViewerRecord('basicProfile')

  const text = record.isLoading
    ? 'Loading...'
    : record.content
    ? `Hello ${record.content.name || 'stranger'}`
    : 'No profile to load'
  return <p>{text}</p>
}

export default ShowViewerName;

// // Mutate the record
// function SetViewerName() {
//   const record: any = useViewerRecord('basicProfile')

//   return (
//     <button
//       disabled={!record.isMutable || record.isMutating}
//       onClick={async () => {
//         await record.merge({ name: 'Alice' })
//       }}>
//       Set name
//     </button>
//   )
// }
