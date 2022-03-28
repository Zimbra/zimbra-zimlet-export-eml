import { createElement } from 'preact';
import { useCallback } from 'preact/hooks';
import { Text } from 'preact-i18n';
import { ActionMenuItem } from '@zimbra-client/components';
import { compose } from 'recompose';
import { withIntl } from '../../enhancers';

function createMore(props, context) {
   const downloadEMLHandler = useCallback(() => {
      downloadEML(props, context)
   }, [props, context]);

   return (
      <ActionMenuItem onClick={downloadEMLHandler}>
         <Text id='zimbra-zimlet-eml-export.menuItem' />
      </ActionMenuItem>
   );
}

function downloadEML(props, context) {
   console.log(props);
   let id;
   try {
      id = props.emailData.messages[0].id;
   } catch {
      id = props.emailData.id;
   }
   forceDownload(`/service/home/~/?auth=co&id=${encodeURIComponent(id)}`, props.emailData.subject+' ('+id+').eml');
}

function forceDownload(href, name) {
   var anchor = document.createElement('a');
   anchor.href = href;
   anchor.download = name;
   document.body.appendChild(anchor);
   anchor.click();
}

export default compose(withIntl())(createMore)
