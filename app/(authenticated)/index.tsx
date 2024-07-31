import { Redirect } from 'expo-router';

/**
 * This is the entry point to the app.
 * It simply redirects to the tenants.
 * The _layout describes the Screens that should be in the stack.
 * The tenants screen [(app)(authorized)] is declared, along with this file (index).
 */
export default function IndexPage() {
  return <Redirect href={`/home`} />;
}
