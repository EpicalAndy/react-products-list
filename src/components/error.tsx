import { ErrorMessageProps } from "../models";

export function Error({error}: ErrorMessageProps) {
  return (
    <p style={ {backgroundColor: 'red'} }>{error}</p>
  )
}