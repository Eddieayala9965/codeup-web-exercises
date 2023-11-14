 if (typeof __JSWRAPPER === 'undefined' || (!__JSWRAPPER.initialized())) {
     if ((typeof ServiceWorkerContainer !== 'undefined' && self instanceof ServiceWorkerContainer) || (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)) {
         importScripts('https://mcas-proxyweb.mcas-gov.us/js-bootstrap.js?saasId=11394&type=WORKER&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin));
     } else {
         /* eslint-disable */
         eval(function () {
             var x = (typeof __caac__ !== "undefined" && typeof __caac__.xhr !== "undefined") ? new __caac__.xhr() : new XMLHttpRequest();
             x.open = (typeof __caac__ !== "undefined" && typeof __caac__.xhro !== "undefined") ? __caac__.xhro : x.open;
             x.send = (typeof __caac__ !== "undefined" && typeof __caac__.xhrs !== "undefined") ? __caac__.xhrs : x.send;
             x.open('GET', 'https://mcas-proxyweb.mcas-gov.us/js-bootstrap.js?saasId=11394&type=WINDOW&origin=' + encodeURIComponent(self.origin ? self.origin : location.origin), false);
             x.withCredentials = true;
             x.send();
             return x.responseText;
         }());
         /* eslint-enable */
     }
}(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["ondemand.resx-ondemand"],{549:function(t,e){e.e="EnvironmentType is invalid";e.t="Invalid GUID string: \"{0}\"";e.n="Invalid version string: \"{0}\"";e.a="The \"{0}\" object cannot be used because it has been disposed.";e.i="The value for \"{0}\" must not be an empty string";e.r="The value for \"{0}\" is false";e.o="The value for \"{0}\" must not be null";e.s="The value for \"{0}\" must not be undefined";e.c="The ServiceScope is already finished";e.d="Cannot consume services because the scope is not finished yet";e.l="Cannot consume services during ServiceScope autocreation";e.u="Cannot register service because the scope is already finished";e.f="The service key \"{0}\" has already been registered in this scope";e.p="CALLSTACK:";e.m="INNERERROR:";e._="LOGPROPERTIES:";},594:function(t,e){e.e="To view the information on this page, you need to verify your identity.";e.t="To view the information on this page, ask a Global or SharePoint Administrator in your organization to go to the API management page in the new SharePoint admin center.";},667:function(t,e){e.e="Please tell us why you chose that answer.";e.t="We'd love your feedback on your experience with Lists.";e.n="We have just two questions for you.";e.a="How likely are you to recommend Lists to others, if asked?";e.i="No";e.r="1 - Not at all likely";e.o="5 - Extremely likely";e.s="Yes";},736:function(t,e){e.e="Something went wrong";},737:function(t,e){e.e="We'd love your feedback on the Photos user experience!";e.t="Please rate your experience.";e.n="1 - Poor";e.a="5 - Excellent";e.i="Please describe how we can make the Photos experience better for you.";e.r="Please tell us more. Why did you choose that answer?";e.o="What can we do to make the experience better?";e.s="Please describe how we can make copy better for you.";e.c="Please let us know your experience copying files and folders with OneDrive.";e.d="We'd love your feedback on copying  files and folders with OneDrive.";e.l="How would you rate your experience?";e.u="1 - Very dissatisfied";e.f="5 - Very satisfied";e.p="We'd love your feedback!";e.m="How likely are you to recommend Microsoft Syntex?";e._="We'd love your feedback about sharing!";e.h="We only have one question.";e.b="Please describe how we can make Microsoft 365 better for you.";e.g="How likely are you to recommend Microsoft 365 to a friend or a colleague?";e.v="Please describe how we can make move better for you.";e.y="Please let us know your experience moving files and folders with OneDrive.";e.S="We'd love your feedback on moving files and folders with OneDrive.";e.D="How would you rate your experience?";e.I="Not now";e.x="We have just two questions for you.";e.C="How are we doing with language quality?";e.O="Sure";e.w="Please tell us more. Why did you choose that answer?";e.E="This Product has been translated for your market from English. How satisfied are you with the quality and clarity of the language used?";e.A="Very dissatisfied";e.L="Dissatisfied";e.k="Neither satisfied nor dissatisfied";e.M="Satisfied";e.P="Very satisfied";e.T="How likely are you to recommend OneDrive on the web to others, if asked?";e.U="How likely are you to recommend SharePoint to a friend or a colleague?";e.F="How satisfied are you with OneDrive?";e.H="1: Very dissatisfied";e.R="2: Somewhat dissatisfied";e.N="3: Neither satisfied nor dissatisfied";e.B="4: Somewhat satisfied";e.j="5: Very satisfied";e.V="Please explain your rating:";e.z="How satisfied are you with the overall experience of sharing files and content in Microsoft products?";},739:function(t,e){e.e="Now you can use @mentions to both share and collaborate on a file.";e.t="Collaboration made easy!";e.n="Try it now";e.a="Maybe later";},740:function(t,e){e.e="Easily add notes or highlight important information.";e.t="Edit your PDF";e.n="Got it";},741:function(t,e){e.e="Create new documents in this library with a template. Upload a document and select fields for authors to fill in. Use a SharePoint list to improve the consistency of results.";e.t="Create";e.n="Create a template from your Word document";e.a="Place a shortcut to this folder among your own files. This folder will always be up to date with the latest changes.";e.i="Find shared folders faster";e.r="Quickly send a file for review. Select Automate > Request sign-off, or Copy as a PDF.";e.o="Quickly create a reminder based on a date column. Select Automate > Set a reminder";e.s="Select an item and click \"Request sign-off\" under Automate to send an approval request email. We will track the status in a column, and send you an update when the approver responds.";e.c="Back up your PC files with OneDrive so that they're always protected and available wherever you are.";e.d="Back up your PC files";e.l="Create new Office files without leaving OneDrive.";e.u="All your files and properties are the same. You can now quickly edit document set properties in the details pane.";e.f="Welcome to the new document set experience!";e.p="Increase the security of your links by making them expire on a certain date.";e.m="Expiring sharing links";e._="Make your library more useful by setting up automation.";e.h="Finish setting up your library";e.b="Make your list more useful by setting up automation.";e.g="Finish setting up your list";e.v="Quickly send a file for review. Select Flow > Request sign-off, or Copy as a PDF.";e.y="Request sign-off or copy as a PDF";e.S="Quickly create a reminder based on a date column. Select Flow > Set a reminder";e.D="Set a reminder?";e.I="Select an item and click \"Request sign-off\" under Flow to send an approval request email. We will track the status in a column, and send you an update when the approver responds.";e.x="Need someone's approval?";e.C="Create documents consistently. Select this template to create a new document by filling in only the info that changes. The rest of the document will stay the same.";e.O="Get started";e.w="Create a document from a modern template ";e.E="See the website for this shared library, where you can post news, share a calendar, manage who has access, and more.";e.A="Do more with sites";e.L="To keep a shared library at the top of this list, click the 'pin' icon next to the library.";e.k="Pin shared libraries";e.M="Get the OneDrive app for your Android, iOS, or Windows device.";e.P="Take your files on the go!";e.T="We created a view to match your template. Select the name of the template from this list to show the fields as columns.";e.U="OK";e.F="Change your view of the library";e.H="Not now";e.R="Your work account is separate from your personal files.";e.N="Go to your OneDrive for Business";e.B="When viewing JPEG and JPG photos in OneDrive, select the Edit button to fix or enhance your photos.";e.j="Photo editing is here!";e.V="Check out the new photo view with this folder!";e.z="New: Reopen recently used files across OneDrive & Office.";e.G="Your recent files are here";e.K="Want to take your library to the next level? Then add a Power Automate document analysis flow!";e.W="Add";e.q="Add a superpower to your document library?";e.Q="Share To Teams";e.Y="Share directly to people and channels on Teams.";e.J="Share To Teams";e.X="Meeting recordings are automatically deleted after a certain time. But you can extend the expiration date by using the info button.";e.Z="Meeting recordings expiration";e.$="Highlight, circle, and underline without modifying the file.";},742:function(t,e){e.e="Back";e.t="Close message bar";e.n="Paste the link wherever you want to share it, like a chat message or email.";e.a="Copy the link to share it";e.i="Done";e.r="Get started";e.o="{0} of {1}";e.s="Next";e.c="Choose what kind of access you want people to have when you copy a link or send an invite.";e.d="Easily set permissions";e.l="Add a name, group, or email to share with and they will get an email invitation to access this item.";e.u="Give access to the people you add above";e.f="Check out the tutorial now or later by selecting the Help button at the top. Get started.";e.p="We've updated the sharing experience";e.m="You can set more detailed permissions for the link.";e._="Change the link settings";e.h="View and manage how people access this item.";e.b="Manage access";},745:function(t,e){e.e="Folder";},746:function(t,e){e.e="A source with id \"{0}\" already exists.";e.t="No source with id \"{0}\" found.";e.n="This includes some metadata about the page";e.a="Page environment";},799:function(t,e){e.e="Item is missing FileRef field. This may be caused by using an incompatible list template.";},800:function(t,e){e.e="My files";},802:function(t,e){e.e="Try advanced editing options like merge or extract.";e.t="Powerful PDF editing";e.n="Show me";e.a="Got it";},803:function(t,e){e.e="A new way to share memories with your favorite people, in the Shared tab.";e.t="Later";e.n="Go to photo story";e.a="Check out photo story";},804:function(t,e){e.e="Securely request signatures and access signed documents within your Microsoft 365 workflow. ";e.t="Need people to sign this document?";e.n="Learn how Syntex eSignature makes it easy";e.a="Try it";e.i="No thanks";},810:function(t,e){e.e="Search";e.t="Site properties";e.n="Query string";e.a="Current user information";e.i="URL fragment";e.r="The part of the current URL that is after the #";e.o="Item id";e.s="The id of the current item";e.c="List link";e.d="The URL of the current list";e.l="Query parameters";e.u="The different query strings that are on the current URL";e.f="Search query";e.p="The query used to get search results";e.m="Search scope";e._="The scope used to get search results";e.h="Site classification";e.b="The classification of the current site";e.g="Site collection link";e.v="The URL of the current site collection";e.y="Site description";e.S="The description of the current site";e.D="Site logo";e.I="The URL of the site logo";e.x="Site title";e.C="The title of the current site";e.O="Site link";e.w="The URL of the current site";e.E="User email";e.A="The email of the current user";e.L="Login name";e.k="The name that the user logged in with";e.M="User name";e.P="The name of the user";}}]);