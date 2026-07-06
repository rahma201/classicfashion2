import { Redirect } from "wouter";

/**
 * The RFQ form was consolidated into /contact to avoid two competing
 * quote forms. This route is kept so existing bookmarks/links don't 404.
 */
export default function RFQ() {
  return <Redirect to="/contact" />;
}
