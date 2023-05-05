using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Abp.Theming;

[Dependency(ReplaceServices = true)]
public class ThemingBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Theming";
}
