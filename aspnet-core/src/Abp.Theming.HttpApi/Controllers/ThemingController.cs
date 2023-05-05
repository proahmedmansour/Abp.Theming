using Abp.Theming.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Abp.Theming.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class ThemingController : AbpControllerBase
{
    protected ThemingController()
    {
        LocalizationResource = typeof(ThemingResource);
    }
}
