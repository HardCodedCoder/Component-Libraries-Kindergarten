# UX Review #

## General ##
This Review is conducted in accordance with the guidelines presented in the ``FHBurgenland HID 02-UX-Prototyping & UX Review`` document from 13.12.

## Specific Feedback Points ##
1. <span style="color:green;">**Anmeldungsformular Accessibility**</span>: Moving the "Anmeldung" (registration) form to its own page could streamline the user experience by reducing clutter
    on the main page and align with common design practices.

2. **Consistent Language**: Ensure consistent use of language throughout the application. The mix of German and English (e.g., "Dashboard") can be confusing.

3. <span style="color:green;">**Available places in Kindergarden** </span>: Improve visibility of how many places in a kindergarden are left for enrollment. 

4. **Typography and Readability**: Increase font size and consider font type adjustments for better readability across devices.

5. <span style="color:green;">**Color Contrast and Accessibility**</span>: Review and adjust color schemes for sufficient contrast to support users with visual impairments.

6. **Responsive Design**: Ensure that the application's design is adaptable to different screen sizes for optimal accessibility and usability.

7. **Feedback on Interaction**: Implement clear success and error messaging systems to provide feedback during user interactions.

8.  <span style="color:green;">**Formular öffnen/schließen Button**</span>:With the "Anmeldung" form moving to its own dedicated page, the "Formular öffnen/schließen"
   button becomes redundant on the main page. Removing this button will streamline the user interface. Instead, a direct link to the "Anmeldung" form should be included in the main navigation, providing a cleaner and more direct pathway for users to register.

9. **Dedicated Unregistration Page**: Currently, the "Kind abmelden" (Unregister Child) action is embedded within the table. This can lead to accidental
   unregistrations and does not allow for additional steps in the process, such as confirmation or providing a reason for unregistration. To enhance
   the user experience and reduce errors, there should be a dedicated page for the unregistration process. This page would provide a more focused environment for users to confirm their action and submit any necessary information related to the unregistration.
   This change will also streamline the table by removing complex actions from it and keeping it strictly informational.

10. **Add descriptive texts**: Add more texts to the user interface to streamline the meaning of the presented content.

## Technical Functionalities to Integrate (Not UX Feedback Points) ##
- Filters and sorting functionalities, including filtering by kindergarten and sorting by various parameters.
- A new page with detailed views for each kindergarten, including information and images.
- A loading spinner for initial data load and when deleting a kindergarten registration.
