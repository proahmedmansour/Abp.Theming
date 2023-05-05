using System;
using System.Collections.Generic;
using System.Text;
using Abp.Theming.Localization;
using Volo.Abp.Application.Services;

namespace Abp.Theming;

/* Inherit your application services from this class.
 */
public abstract class ThemingAppService : ApplicationService
{
    protected ThemingAppService()
    {
        LocalizationResource = typeof(ThemingResource);
    }
}
