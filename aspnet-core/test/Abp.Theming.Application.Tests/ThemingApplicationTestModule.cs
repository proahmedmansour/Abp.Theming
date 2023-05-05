using Volo.Abp.Modularity;

namespace Abp.Theming;

[DependsOn(
    typeof(ThemingApplicationModule),
    typeof(ThemingDomainTestModule)
    )]
public class ThemingApplicationTestModule : AbpModule
{

}
